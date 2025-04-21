import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const StepThree: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Step 3: Confirm</h2>
      <Button onClick={() => navigate('/createpost/step2')}>Back</Button>{' '}
      
      <Button
        variant="contained"
        onClick={() => navigate('/createpost/step4')}
      >
        Next
      </Button>
    </div>
  );
};

export default StepThree;
