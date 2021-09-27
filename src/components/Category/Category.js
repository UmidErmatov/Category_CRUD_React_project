import React, { useState } from "react";
import Table from "./Table";
import SnackBar from './Snackbar';
import CateModal from "./CateModal";
import DeleteSnackbar from './deleteSnackbar';
import "./Category.css";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Grid, Paper, Button, Box, Container } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

let posts = [
  {
    name: "HTML5",
    color: "#3a4578"
  },
  {
    name: "CSS3",
    color: "#7cad54"
  },
  {
    name: "Bootstrap",
    color: "#651af4"
  },
  {
    name: "JavaScript",
    color: "#fca651"
  },
]

export default function Category() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openDeleteSnackbar, setOpenDeleteSnackbar] = useState(false);
  const [updateData, setUpdateData] = useState({});

const closeSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
    setOpenDeleteSnackbar(false)
  };

  const handleData = (postData, index) => {
    setUpdateData({ ...postData, index: index });
    setModal(false);
    setOpen(true);
  };

  const handleOpen = () => {
    setOpen(true);
    setModal(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const saveCategory = (data) => {
    posts.push(data);
    setOpen(false);
    setModal(true);
    setOpenSnackbar(true);
  };

  const updateCate = (newData) => {
    posts[newData.index].name = newData.name;
    posts[newData.index].color = newData.color;
    setOpen(false);
    setModal(false);
    setOpenSnackbar(true);    
  };

  const deletId = (index) => {
    posts.splice(index, 1);
    setOpenDeleteSnackbar(true);
  };


  return (
    <>
      <Box>
        <Container>
          <Grid container spacing={2} style={{ marginTop: "20px" }}>
            <Grid item xs={4}>
              <Paper className={classes.paper}>
                <h3>Categories</h3>
              </Paper>
            </Grid>
            <Grid item xs={1} id="removeGrid"></Grid>
            <Grid item xs={5}></Grid>
            <Grid item xs={2}>
              <Paper className={classes.paper}>
                <Button color="primary" onClick={handleOpen} open={open}>
                  Add new
                </Button>
              </Paper>
            </Grid>
          </Grid>
          <Table posts={posts} deletId={deletId} handleData={handleData} />
        </Container>
        <CateModal
          open={open}
          handleClose={handleClose}
          saveCategory={saveCategory}
          updateCate={updateCate}
          updateData={updateData}
          modal={modal}
        />
      <SnackBar open={openSnackbar} handleClose={closeSnackbar} modal={modal} />
      <DeleteSnackbar  open={openDeleteSnackbar} handleClose={closeSnackbar} />
      </Box>
    </>
  );
}
