import { memo } from 'react';
import { getNumberFromSlug, cleanTitle } from '../utils/helpers';

/**
 * Footer navigation with prev/next buttons
 */
const FooterNav = memo(({ prevItem, nextItem, onNavigate }) => {
  const renderNavButton = (item, isPrev) => {
    if (!item) return <span className="nav-foot hidden" />;

    const noteNum = getNumberFromSlug(item.slug);
    const numPrefix = noteNum ? `${noteNum}) ` : '';
    const title = cleanTitle(item.title);

    return (
      <a
        className="nav-foot"
        onClick={(e) => {
          e.preventDefault();
          onNavigate(item.slug);
        }}
      >
        {isPrev ? `◀ ${numPrefix}${title}` : `${numPrefix}${title} ▶`}
      </a>
    );
  };

  return (
    <div className="content-footer">
      {renderNavButton(prevItem, true)}
      {renderNavButton(nextItem, false)}
    </div>
  );
});

FooterNav.displayName = 'FooterNav';

/**
 * Site footer with credits
 */
export const SiteFooter = memo(() => (
  <footer className="site-footer">
    Made with ♥ — Content rendered by Avdesh Jadon.
  </footer>
));

SiteFooter.displayName = 'SiteFooter';

export default FooterNav;
