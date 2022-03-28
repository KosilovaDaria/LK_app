import { Box, Typography,Accordion, AccordionSummary, AccordionDetails, Link, Checkbox  } from "@mui/material";
import {NotificationsNoneOutlined, ExpandMore, Circle, CircleOutlined } from '@mui/icons-material';
import { useState, useEffect } from "react";
import TitleBar from "../titleBar/TitleBar";
import {  styled } from '@mui/material/styles';

const Notifications = ({ aparts }) => {

  const notificData = [
    {
      id:0,
      new: true,
      from: 'УК Волна',
      title: 'Выслан отчёт за февраль по договору № 12234556',
      date: '25.02 11:25',
      text: 'Выслан отчёт за февраль по договору № 12234556'
    },
    { 
      id:1,
      new: true,
      from: 'УК Волна',
      title: 'Выслан отчёт за февраль по договору № №1765',
      date: '25.02 10:05',
      text: 'Выслан отчёт за февраль по договору № №1765'
    },
    {
      id:2,
      new: false,
      from: 'УК Волна',
      title: 'Выслан отчёт за январь по договору № 12234556',
      date: '25.01 11:25',
      text: 'Выслан отчёт за январь по договору № 12234556'
    },
    {
      id:3,
      new: false,
      from: 'УК Волна',
      title: 'Выслан отчёт за январь по договору № №1765',
      date: '25.01 10:05',
      text: 'Выслан отчёт за январь по договору № №1765'
    },
    {
      id:4,
      new: true,
      from: 'УК Волна',
      title: 'Замена счётчиков в ап. №345 ',
      date: '12.01 17:05',
      text: 'Замена счётчиков в ап. №345'
    },
    {
      id:5,
      new: false,
      from: 'УК Волна',
      title: 'Заказ на генеральную уборку и химчистку мебели принят',
      date: '02.01 15:45',
      text: 'Заказ на генеральную уборку и химчистку мебели принят'
    }, 
  ]

  const NewNotification = styled(Box) ({
    width: 10, 
    height: 10, 
    borderRadius: '50%', 
    margin: 6
  })

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
 

  return (
    <>
      <TitleBar
        icon={<NotificationsNoneOutlined color="primary" fontSize="large" sx={{ mr: 2 }} />}
        title='Уведомления от УК' />
      <Box>
        {notificData.map(item => (
          <Accordion key={item.id} disableGutters expanded={expanded === `panel${item.id}`} onChange={handleChange(`panel${item.id}`)} TransitionProps={{ unmountOnExit: true }}>
            <AccordionSummary>
              {item.new ? <NewNotification sx={{ bgcolor: 'primary.main' }} /> : <NewNotification sx={{ bgcolor: '#fff' }} />}
              <Typography sx={{ width: '20%', flexShrink: 0, ml: 2 }}>
                {item.from}
              </Typography>
              <Typography sx={{ width: '65%', flexShrink: 1 }} >
                {item.title}
                <Link> (посмотреть)</Link>
              </Typography>
              <Typography>{item.date}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography >
                {item.text}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </>
  )
}

export default Notifications;