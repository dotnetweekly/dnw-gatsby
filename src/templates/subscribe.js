import React from 'react'

class Subscribe extends React.Component {
  render() {
    return (
      <section className="subscribe">
        <div class="columns">
          <div class="column">
            <p class="title is-3">
              Want to receive every Tuesday the best links of the .NET realm?
            </p>
            <p class="subtitle is-5 has-text-grey-light">
              Once subscribed you can login, submit a link, upvote and receive
              the weekly newsletter.
            </p>
            <form
              action="https://mail.jgthms.com/subscribe"
              method="POST"
              accept-charset="utf-8"
            >
              <div class="field is-grouped">
                <div class="control is-expanded">
                  <input
                    type="email"
                    value=""
                    name="email"
                    class="input is-medium is-flat"
                    placeholder="email address"
                    required=""
                  />
                </div>
                <div class="is-hidden">
                  <input type="text" name="hp" id="hp" />
                </div>
                <input
                  type="hidden"
                  name="list"
                  value="So5UY3O9gHJkq892bn763Tyf4A"
                />
                <button class="button is-medium is-link">
                  <strong>Subscribe</strong>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default Subscribe
