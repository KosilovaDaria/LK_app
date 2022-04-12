import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Container, } from "@mui/material";
import { NotificationsNoneOutlined } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import useService from '../../services/services';
import { useEffect, useState, } from "react";
import Clamp from 'react-multiline-clamp';
import TitleBar from "../titleBar/TitleBar";
import Spinner from '../spinner/Spinner';
import ErrorMessage from "../errorMessage/ErrorMessage";
import './style.css'

const Notifications = () => {

  const { getNotifications } = useService();

  const [notificationList, setNotificationList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  useEffect(() => {
    onRequest();
  }, [])

  const onRequest = () => {
    getNotifications()
      .then(onNotificationsLoaded)
      .catch(onError)
  }

  const onNotificationsLoaded = (notifications) => {
    setNotificationList(notifications);
    setLoading(false)
  }

  const onError = () => {
    setLoading(false);
    setError(true);
  }
  //функция обновляющая статус на прочитано
  const statusOverwrite = (id, arr) => {
    const newArr = arr.map(item => (item.id === id && (item.new = true)) ? item.new = !item.new : item.new);
    return newArr;
  }
  //состояние раскрытия уведомления
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel, id) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    statusOverwrite(id, notificationList)
  };


  //
  const NewNotification = styled(Box)({
    width: 8,
    height: 8,
    borderRadius: '50%',
    margin: 'auto'
  })

  const TextAccordion = (props) => {
    return (
      <>
        <Typography fontWeight={props.fontWeight} variant='body1' sx={{ width: { xs: '70px', sm: '26%', s: '17%' }, ml: 1.5, mr: 1 }}>
          {props.from}
        </Typography>
        <Clamp withTooltip lines={2}>
          <Typography fontWeight={props.fontWeight} variant='body1' sx={{ height: '40px', width: { xs: '50%', sm: '55%', s: '65%' }, flexShrink: 1 }} >
            {props.title}
          </Typography>
        </Clamp>
        <Typography fontWeight={props.fontWeight} variant='body1' sx={{ width: '15%', textAlign: 'center' }}>{props.date}</Typography>
      </>

    )
  }
  //функция перебирает список уведомлений и возвращает верстку 
  function renderItems(arr) {
    const items = arr.map(item => {
      return (
        <Accordion
          key={item.id}
          disableGutters
          expanded={expanded === `panel${item.id}`}
          onChange={handleChange(`panel${item.id}`, item.id)}
          TransitionProps={{ unmountOnExit: true }}
          sx={{
            '& .MuiAccordionSummary-content .MuiTypography-root': {
              fontSize: { xs: '14px', md: '16px' }
            },
            '& .MuiCollapse-wrapper':
            {
              maxWidth: '600px',
              minWidth: '200px',
              width: { xl: '90%', md: '60%', xs: '100%' },
              marginLeft: { xl: '21%', md: '21%', xs: '0%' }
            },
            '& .Mui-expanded': {
              backgroundColor: 'rgba(228, 248, 255, 1)'
            }
          }}
        >
          <AccordionSummary expanded='true' >
            <Box sx={{ width: '3%', mt: '6px' }}>
              {item.new ? <NewNotification sx={{ bgcolor: 'orange.main' }} /> : <NewNotification sx={{ bgcolor: 'none' }} />}</Box>
            {item.new ? <TextAccordion
              bgcolor='#E58B1E'
              fontWeight={700}
              new={item.new}
              from={item.from}
              title={item.title}
              date={item.date}
            /> :
              <TextAccordion
                bgcolor='#fff'
                fontWeight={400}
                new={item.new}
                from={item.from}
                title={item.title}
                date={item.date}
              />
            /* <Box sx={{ width: '3%', mt: '6px' }}>{item.new ? <NewNotification sx={{ bgcolor: 'orange.main' }} /> : <NewNotification sx={{ bgcolor: 'none' }} />}</Box>
            <Typography variant='body1' sx={{ width: { xs: '70px', sm: '26%', s: '17%' }, ml: 1.5, mr: 1 }}>
              {item.from}
            </Typography>
            <Clamp withTooltip lines={2}>
              <Typography variant='body1' sx={{ height: '40px', width: { xs: '50%', sm: '55%', s: '65%' }, flexShrink: 1}} >
                {item.title}
              </Typography>
            </Clamp>
            <Typography variant='body1' sx={{ width: '15%', textAlign: 'center' }} >{item.date}</Typography> */}
          </AccordionSummary>
          <AccordionDetails >
            <Typography sx={{ fontSize: { xs: '12px', md: '16px' } }}>
              {item.text}
            </Typography>
          </AccordionDetails>
        </Accordion>
      )
    });
    return (
      <Box sx={{ fontWeight: 700 }}>
        {items}
      </Box>
    )
  }

  const items = renderItems(notificationList);

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;

  return (
    <Container maxWidth='xl'>
      <TitleBar
        icon={<NotificationsNoneOutlined color="primary" fontSize="large" sx={{ mr: 2 }} />}
        title='Уведомления от УК' />
      {errorMessage}
      {spinner}
      {items}
    </Container>
  )
}

export default Notifications;