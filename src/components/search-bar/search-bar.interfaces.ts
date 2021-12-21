export default interface SearchBarProps {
  countryName: string;
  handleOnChange: (countryToSearch: string) => void;
}