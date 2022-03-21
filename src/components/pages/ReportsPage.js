import { Box, Typography, Container } from "@mui/material";
import { ArrowBack, CottageOutlined } from '@mui/icons-material';
import ReportsTable from "../reportsTable/ReportsTable";
import TitleBar from "../titleBar/TitleBar";

const ReportsPage = () => {
  return (
    <>
      <Container maxWidth='lg'>
        <TitleBar
          arrow={<ArrowBack sx={{ mr: 2 }} />}
          icon={<CottageOutlined color="primary" fontSize="large" sx={{ mr: 2 }} />}
          title='Отчеты' />
        <Box>
          <Typography>Адрес: С-Пб., ул. Новая, д.110а, корп 2 , подъезд 1, этаж 12 </Typography>
          <Typography>Лицевой счет: № 223654</Typography>
        </Box>
        <Typography component="h2" variant="h5">Отчеты</Typography>
        <ReportsTable />
      </Container>
    </>
  )
}

export default ReportsPage;