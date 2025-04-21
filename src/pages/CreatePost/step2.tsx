import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const StepTwo: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Step 2: Contact Info</h2>
      <Button onClick={() => navigate('/createpost')}>Back</Button>{' '}
      <Button variant="contained" onClick={() => navigate('/createpost/step3')}>
        Next
      </Button>
    </div>
  );
};

export default StepTwo;
