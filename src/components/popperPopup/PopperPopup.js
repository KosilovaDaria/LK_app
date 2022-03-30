import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import { Typography, Button, Popper, Fade } from "@mui/material";
import { CheckCircle, Close } from '@mui/icons-material';

const PopperPopup = () => {
  return (
    <PopupState variant="popper" popupId="demo-popup-popper">
      {(popupState) => (
        <div>
          <Button variant="contained" {...bindToggle(popupState)}>
            Принять
          </Button>
          <Popper {...bindPopper(popupState)}
            placement="left-end"
            transition>
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Button {...bindToggle(popupState)}
                  sx={{ width: '250px', mr: 1, mb: 5, textTransform: 'none', bgcolor: 'rgba(226, 236, 245, 1)' }}
                  startIcon={<CheckCircle />}
                  endIcon={<Close />}>
                  <Typography >Отчет принят</Typography>
                </Button>
              </Fade>
            )}
          </Popper>
        </div>
      )}
    </PopupState>
  )
}

export default PopperPopup;