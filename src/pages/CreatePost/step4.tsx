import { Button } from '@mui/material';

export default function Step4() {
  return (
    <div>
      this is step 4
      <Button
        variant="contained"
        color="success"
        onClick={() => alert('Form submitted!')}
      >
        Finish
      </Button>
    </div>
  )
}
