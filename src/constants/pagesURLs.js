import * as pages from './pages';
import config from 'config';

const result = {
  [pages.personListView]: `${config.UI_URL_PREFIX}/${pages.personListView}`,
  [pages.personEditor]: `${config.UI_URL_PREFIX}/${pages.personEditor}`,
  [pages.defaultPage]: `${config.UI_URL_PREFIX}/${pages.defaultPage}`,
  [pages.login]: `${config.UI_URL_PREFIX}/${pages.login}`,
  [pages.secretPage]: `${config.UI_URL_PREFIX}/${pages.secretPage}`,
};

export default result;
