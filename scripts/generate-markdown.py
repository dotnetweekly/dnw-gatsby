import requests
import sys

URL_Newsletter = "https://dnw-newsletter.azurewebsites.net/api/v1/"
URL_API = "https://dnw-api.azurewebsites.net/api/v1/"

newsletters = requests.get('%snewsletters' % URL_Newsletter).json()

if not(newsletters["success"]):
    print("No Newsletters Found")
    sys.exit()

for newsletter in newsletters["data"]:
    print(newsletter)
