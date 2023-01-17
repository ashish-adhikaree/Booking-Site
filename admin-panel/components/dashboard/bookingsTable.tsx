import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function bookingsTable() {
  const headings = ["Booking Id", "Activity", "Customer Name", "Price", "Booking Date", "Status"]
  return (
    <section className="dashboard-section">
      <p className="dashboard-section-header">recent bookings</p>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {headings.map((title, index)=>(
                <TableCell className="font-bold text-customBlack uppercase" key={index}>{title}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>

          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
}
