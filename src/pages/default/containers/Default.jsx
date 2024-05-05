import { useIntl } from 'react-intl';
import React from 'react';
import Typography from 'components/Typography';
import { countries } from 'app/data/countries';

function Default() {
  const { formatMessage } = useIntl();

  const countryList = countries.map(country=><tr key={country.id}>
    <td>{country.name}</td><td>{country.capital}</td><td>{country.population}</td><td>{country.square}</td>
    </tr >);

  return (
    <Typography>
      <table>
        <thead><td>Name</td><td>Capital</td><td>Population</td><td>Total area</td></thead>
        <tbody> {countryList}</tbody>
       </table>
    </Typography>
  );
}

export default Default;
