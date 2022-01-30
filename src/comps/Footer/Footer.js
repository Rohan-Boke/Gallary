import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

export default function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="text.secondary"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Member-name</Box>
              <Box>
                <Link href="/" color="inherit">
                  Ali
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Isha
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Megha
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Rohan
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Contribution</Box>
              <Box>
                <Link href="/" color="inherit">
                  Header
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Image processing
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Image rendering
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Footer
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Contact-Us</Box>
              <Box>
                <Link href="/" color="inherit">
                  Instagram
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Facebook
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Code-Sandbox
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Github
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            Group-A project &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
}
