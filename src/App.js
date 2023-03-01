import { Settings } from '@mui/icons-material';
import { Button } from '@mui/material';
import { SampleButton } from './SampleButton';

function App() {
  return (
    <div>
      <Button>버튼</Button>
      <Button variant='contained'>버튼2</Button>
      <Button variant='contained' color='secondary'>
        버튼3
      </Button>
      <Button variant='contained' startIcon={<Settings />}>
        버튼4
      </Button>
      <SampleButton>버튼5</SampleButton>
    </div>
  );
}

export default App;
