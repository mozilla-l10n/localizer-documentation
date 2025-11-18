// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="index.html">Introduction</a></li><li class="chapter-item expanded "><a href="community/index.html">Community</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="community/l10n_community_roles.html">Roles and guidelines</a></li><li class="chapter-item expanded "><a href="community/l10n_feedback.html">Giving good feedback</a></li></ol></li><li class="chapter-item expanded "><a href="products/index.html">Products</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="products/l10n_project_managers.html">Project managers</a></li><li class="chapter-item expanded "><a href="products/firefox_desktop/index.html">Firefox for desktop</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="products/firefox_desktop/testing.html">How to test</a></li></ol></li><li class="chapter-item expanded "><a href="products/firefox_android/index.html">Firefox for Android</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="products/firefox_android/how_to_localize.html">How to localize</a></li><li class="chapter-item expanded "><a href="products/firefox_android/testing.html">How to test</a></li></ol></li><li class="chapter-item expanded "><a href="products/firefox_ios/index.html">Firefox for iOS</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="products/firefox_ios/testing.html">How to test</a></li></ol></li><li class="chapter-item expanded "><a href="products/focus/index.html">Focus</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="products/focus/how_to_localize.html">How to localize</a></li><li class="chapter-item expanded "><a href="products/focus/testing_focus.html">How to test</a></li></ol></li><li class="chapter-item expanded "><a href="products/mozilla_org/index.html">Mozilla.org &amp; Firefox.com</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="products/mozilla_org/testing.html">How to test</a></li></ol></li><li class="chapter-item expanded "><a href="products/l10n_testing.html">Testing localization of Mozilla projects</a></li></ol></li><li class="chapter-item expanded "><a href="tools/index.html">Tools</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="tools/pontoon/index.html">Pontoon</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="tools/pontoon/translate.html">How to translate</a></li><li class="chapter-item expanded "><a href="tools/pontoon/translation_workspace.html">Translation workspace</a></li><li class="chapter-item expanded "><a href="tools/pontoon/teams_projects.html">Team and project pages</a></li><li class="chapter-item expanded "><a href="tools/pontoon/users.html">User accounts and settings</a></li><li class="chapter-item expanded "><a href="tools/pontoon/notifications.html">Notifications</a></li><li class="chapter-item expanded "><a href="tools/pontoon/profile.html">Profile page</a></li><li class="chapter-item expanded "><a href="tools/pontoon/glossary.html">Glossary</a></li></ol></li><li class="chapter-item expanded "><a href="tools/fluent/index.html">Fluent</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="tools/fluent/basic_syntax.html">Fluent syntax</a></li><li class="chapter-item expanded "><a href="tools/fluent/functions.html">Functions</a></li><li class="chapter-item expanded "><a href="tools/fluent/brand_names.html">Brand names</a></li></ol></li><li class="chapter-item expanded "><a href="misc/bugzilla_l10n.html">Bugzilla for localizers</a></li><li class="chapter-item expanded "><a href="tools/mercurial/index.html">Mercurial tips</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="tools/mercurial/tracking_back_string_to_bug.html">Using annotate</a></li></ol></li></ol></li><li class="chapter-item expanded "><a href="webprojects/index.html">Web projects</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="webprojects/fxa.html">Accounts.firefox.com (FxA)</a></li><li class="chapter-item expanded "><a href="webprojects/amo.html">Addons.mozilla.org</a></li><li class="chapter-item expanded "><a href="webprojects/mdn.html">Developer.mozilla.org (MDN)</a></li><li class="chapter-item expanded "><a href="webprojects/fundraising.html">Mozilla Donate website</a></li><li class="chapter-item expanded "><a href="webprojects/sumo.html">Support.mozilla.org (SUMO)</a></li></ol></li><li class="chapter-item expanded "><a href="misc/l10n_resources.html">l10n resources</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
