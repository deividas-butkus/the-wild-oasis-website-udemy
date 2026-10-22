import { getCountries } from "@/_lib/data-service";

// Let's imagine your colleague already built this component 😃

async function SelectCountry({
  defaultCountry,
  defaultFlag,
  name,
  id,
  className,
}) {
  const countries = await getCountries();
  // Match by flag first: some saved names come from the old API and differ from the current list
  const country =
    countries.find((c) => c.flag === defaultFlag) ??
    countries.find((c) => c.name === defaultCountry);

  return (
    <select
      name={name}
      id={id}
      // Here we use a trick to encode BOTH the country name and the flag into the value. Then we split them up again later in the server action
      defaultValue={country ? `${country.name}%${country.flag}` : ""}
      className={className}
    >
      <option value="">Select country...</option>
      {countries.map((c) => (
        <option key={c.name} value={`${c.name}%${c.flag}`}>
          {c.name}
        </option>
      ))}
    </select>
  );
}

export default SelectCountry;
