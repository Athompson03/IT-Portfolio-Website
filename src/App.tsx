
import { useState } from 'react';
import {
  Box,
  Typography,
  Select,
  MenuItem,
} from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';

function App() {
  const [menu1, setMenu1] = useState('');
  const [menu2, setMenu2] = useState('');
  const [menu3, setMenu3] = useState('');
  const [menu4, setMenu4] = useState('');
  const [menu5, setMenu5] = useState('');

  const handleMenu1 = (event: SelectChangeEvent) => {
    setMenu1(event.target.value);
  };

  const handleMenu2 = (event: SelectChangeEvent) => {
    setMenu2(event.target.value);
  };

  const handleMenu3 = (event: SelectChangeEvent) => {
    setMenu3(event.target.value);
  };

  const handleMenu4 = (event: SelectChangeEvent) => {
    setMenu4(event.target.value);
  };

  const handleMenu5 = (event: SelectChangeEvent) => {
    setMenu5(event.target.value);
  };

  return (
    <Box sx={{ textAlign: 'center', padding: 4 }}>
      <Typography variant="h3">
        Antonio Thompson
      </Typography>

      <Typography variant="h5" sx={{ mt: 2 }}>
        Welcome to My Home Lab
      </Typography>

      <Typography sx={{ mt: 2, mb: 4 }}>
        My Personal Home Lab Website
      </Typography>

      <Box sx={{ maxWidth: 500, margin: 'auto' }}>
        <Typography variant="h6">Hardware</Typography>
        <Select
          value={menu1}
          onChange={handleMenu1}
          displayEmpty
          fullWidth
          sx={{ mb: 3 }}
        >
          <MenuItem value="" disabled>
            Select Hardware
          </MenuItem>
        </Select>

        <Typography variant="h6">Networking</Typography>
        <Select
          value={menu2}
          onChange={handleMenu2}
          displayEmpty
          fullWidth
          sx={{ mb: 3 }}
        >
          <MenuItem value="" disabled>
            Select Networking
          </MenuItem>
        </Select>

        <Typography variant="h6">Storage</Typography>
        <Select
          value={menu3}
          onChange={handleMenu3}
          displayEmpty
          fullWidth
          sx={{ mb: 3 }}
        >
          <MenuItem value="" disabled>
            Select Storage
          </MenuItem>
        </Select>

        <Typography variant="h6">Virtual Machines</Typography>
        <Select
          value={menu4}
          onChange={handleMenu4}
          displayEmpty
          fullWidth
          sx={{ mb: 3 }}
        >
          <MenuItem value="" disabled>
            Select Virtual Machines
          </MenuItem>
        </Select>

        <Typography variant="h6">Projects</Typography>
        <Select
          value={menu5}
          onChange={handleMenu5}
          displayEmpty
          fullWidth
          sx={{ mb: 3 }}
        >
          <MenuItem value="" disabled>
            Select Projects
          </MenuItem>
        </Select>
      </Box>
    </Box>
  );
}

export default App;
