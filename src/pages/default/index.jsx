import React, { useMemo } from 'react';
import IntlProvider from 'misc/providers/IntlProvider';
import useLocationSearch from 'misc/hooks/useLocationSearch';

import getMessages from './intl';
import PersonListView from 'app/components/PersonListView';
import PersonEditor from 'app/components/PersonEditor';
import { getPersonById } from 'app/data/persons';

function Index(props) {
  const {
    lang,
  } = useLocationSearch();
  const messages = useMemo(() => getMessages(lang), [lang]);
  /*<PersonListView {...props} />*/
  return (
    <IntlProvider messages={messages}>
      <PersonEditor mode="view" person={getPersonById(2)} />
    </IntlProvider>
  );
}

export default Index;
