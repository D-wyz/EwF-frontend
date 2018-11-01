import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <section id="footer">
        <div className="container">
          <header>
            <h2>
              Questions or comments? <strong>Get in touch:</strong>
            </h2>
          </header>
          <div className="row">
            <div className="col-6 col-12-medium">
              <section>
                <form method="post" action="#">
                  <div className="row gtr-50">
                    <div className="col-6 col-12-small">
                      <input name="name" placeholder="Name" type="text" />
                    </div>
                    <div className="col-6 col-12-small">
                      <input name="email" placeholder="Email" type="text" />
                    </div>
                    <div className="col-12">
                      <textarea
                        name="message"
                        placeholder="Message"
                        defaultValue={
                          '                    </div>\n                    <div class="col-12">\n                      <a\n                        href="#"\n                        class="form-button-submit button icon fa-envelope"\n                      >\n                        Send Message\n                      </a>\n                    </div>\n                  </div>\n                </form>\n              </section>\n            </div>\n            <div class="col-6 col-12-medium">\n              <section>\n                <p>\n                  Erat lorem ipsum veroeros consequat magna tempus lorem ipsum\n                  consequat Phaselamet mollis tortor congue. Sed quis mauris sit\n                  amet magna accumsan tristique. Curabitur leo nibh, rutrum eu\n                  malesuada.\n                </p>\n                <div class="row">\n                  <div class="col-6 col-12-small">\n                    <ul class="icons">\n                      <li class="icon fa-home">\n                        1234 Somewhere Road\n                        <br />\n                        Nashville, TN 00000\n                        <br />\n                        USA\n                      </li>\n                      <li class="icon fa-phone">(000) 000-0000</li>\n                      <li class="icon fa-envelope">\n                        <a href="#">info@untitled.tld</a>\n                      </li>\n                    </ul>\n                  </div>\n                  <div class="col-6 col-12-small">\n                    <ul class="icons">\n                      <li class="icon fa-twitter">\n                        <a href="#">@untitled</a>\n                      </li>\n                      <li class="icon fa-instagram">\n                        <a href="#">instagram.com/untitled</a>\n                      </li>\n                      <li class="icon fa-dribbble">\n                        <a href="#">dribbble.com/untitled</a>\n                      </li>\n                      <li class="icon fa-facebook">\n                        <a href="#">facebook.com/untitled</a>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </section>\n            </div>\n          </div>\n        </div>\n        <div id="copyright" class="container">\n          <ul class="links">\n            <li>© Untitled. All rights reserved.</li>\n            <li>\n              Design: <a href="http://html5up.net">HTML5 UP</a>\n            </li>\n          </ul>\n        </div>\n      </section>\n'
                        }
                      />
                    </div>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
