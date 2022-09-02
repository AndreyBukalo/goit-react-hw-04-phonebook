import { Label, Input } from './Filter.styled';
import { Box } from 'components/Box';

export const Filter = ({ onChange }) => {
  return (
    <Box display="flex" pl="30px">
      <Label>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          onChange={onChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
    </Box>
  );
};
