import requests
import sys
import os

current_path = os.path.dirname(os.path.abspath(__file__))

URL_Newsletter = "https://dnw-newsletter.azurewebsites.net/api/v1/"
URL_API = "https://dnw-api.azurewebsites.net/api/v1/"

newsletters = requests.get('%snewsletters' % URL_Newsletter).json()
linksData = {}

fpost = open("%s/post.md" % current_path, "r")
post_tmpl = fpost.read()

if not(newsletters["success"]):
    print("No Newsletters Found")
    sys.exit()


def makeFolders(year, week):
    yearPath = "%s/../src/newsletters/%s" % (current_path, year)
    if not os.path.exists(yearPath):
        os.makedirs(yearPath)
    weekPath = "%s/%s" % (yearPath, week)
    if not os.path.exists(weekPath):
        os.makedirs(weekPath)
    return weekPath


for newsletter in newsletters["data"]:
    year = newsletter["year"]
    week = newsletter["week"]

    weekPath = makeFolders(year, week)
    linksJson = {}
    if not year in linksData:
        linksData[year] = {}
    if not week in linksData[year]:
        linksData[week] = {}
        linksJson = requests.get(
            '%slinks?category=&week=%s&year=%s' % (URL_API, week, year)).json()

    linksJson = linksJson["data"]["links"]
    for linkJson in linksJson:

        postPath = "%s/%s.md" % (weekPath, linkJson["slug"])
        if not os.path.exists(postPath):
            newPostData = requests.get('%slinks/%s' %
                                       (URL_API, linkJson["slug"])).json()
            if newPostData["success"]:
                new_post = post_tmpl % (
                    linkJson["_id"],
                    linkJson["title"],
                    linkJson["url"],
                    linkJson["category"],
                    linkJson["slug"],
                    linkJson["user"]["_id"],
                    linkJson["createdOn"],
                    str.join(",", (("'%s'" % tag)
                                   for tag in linkJson["tags"])),
                    newPostData["data"]["content"]
                )
                f = open(postPath, "x")
                f.write(new_post)
