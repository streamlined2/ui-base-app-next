import { useIntl } from 'react-intl';
import React from 'react';
import Typography from 'components/Typography';
import { persons } from 'app/data/persons';

function Default() {
  const { formatMessage } = useIntl();

  const personList = persons.map(person=><tr key={person.id}>
    <td>{person.name}</td><td>{person.birthday}</td><td>{person.sex}</td><td>{person.countryOfOrigin.name}</td><td>{person.citizenship.name}</td>
    </tr >);

  return (
    <Typography>
      <table>
        <thead><td>Name</td><td>Birthday</td><td>Sex</td><td>Country of origin</td><td>Country of citizenship</td></thead>
        <tbody> {personList}</tbody>
       </table>
    </Typography>
  );
}

export default Default;
