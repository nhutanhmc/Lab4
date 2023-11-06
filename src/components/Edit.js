import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, TextField, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';

export default function EditFilm() {
  const { id } = useParams();
  const [film, setFilm] = useState(null);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Vui lòng điền trường này'),
    year: Yup.string().required('Vui lòng điền trường này'),
    class: Yup.string().required('Vui lòng điền trường này'),
    feedback: Yup.string().required('Vui lòng điền trường này'),
    time: Yup.string().required('Vui lòng điền trường này'),
    video: Yup.string().required('Vui lòng điền trường này'),
    cost: Yup.string().required('Vui lòng điền trường này'),
    img: Yup.string().required('Vui lòng điền trường này'),
  });

  useEffect(() => {
    fetch(`https://6545916cfe036a2fa9546dff.mockapi.io/lab/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFilm(data);
      })
      .catch((error) => {
        console.error('Lỗi khi lấy dữ liệu từ API:', error);
      });
  }, [id]);

  const handleSubmit = (values) => {
    console.log(values);

    fetch(`https://6545916cfe036a2fa9546dff.mockapi.io/lab/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        img: values.image,
        title: values.name,
        year: values.year,
        nation: values.class,
        detail: values.feedback,
        time: values.time,
        video: values.video,
        cost: values.cost,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Dữ liệu đã được cập nhật thành công:', data);

        alert('Cập nhật thành công');
      })
      .catch((error) => {
        console.error('Lỗi khi gửi dữ liệu cập nhật:', error);
      });
  };

  if (!film) {
    return <div>Loading...</div>;
  }

  return (
    <Formik
      initialValues={{
        name: film.title,
        year: film.year,
        class: film.nation,
        feedback: film.detail,
        time: film.time,
        video: film.video,
        cost: film.cost,
        img: film.img
      }}
      validate={(values) => {
        const errors = {};
        return errors;
      }}
      onSubmit={handleSubmit}
    >
      <Form>
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Field
          name="name"
          as={TextField}
          label="Title"
          fullWidth
          variant="outlined"
        />
        <ErrorMessage name="name" component="div" className="error" />
      </Grid>
      <Grid item xs={6}>
        <Field
          name="year"
          as={TextField}
          label="Year"
          fullWidth
          variant="outlined"
        />
        <ErrorMessage name="year" component="div" className="error" />
      </Grid>
      <Grid item xs={6}>
        <Field
          name="class"
          as={TextField}
          label="Nation"
          fullWidth
          variant="outlined"
        />
        <ErrorMessage name="class" component="div" className="error" />
      </Grid>
      <Grid item xs={6}>
        <Field
          name="feedback"
          as={TextField}
          label="Detail"
          fullWidth
          variant="outlined"
        />
        <ErrorMessage name="feedback" component="div" className="error" />
      </Grid>
      <Grid item xs={6}>
        <Field
          name="time"
          as={TextField}
          label="Time"
          fullWidth
          variant="outlined"
        />
        <ErrorMessage name="time" component="div" className="error" />
      </Grid>
      <Grid item xs={6}>
        <Field
          name="video"
          as={TextField}
          label="Video"
          fullWidth
          variant="outlined"
        />
        <ErrorMessage name="video" component="div" className="error" />
      </Grid>
      <Grid item xs={6}>
        <Field
          name="cost"
          as={TextField}
          label="Cost"
          fullWidth
          variant="outlined"
        />
        <ErrorMessage name="cost" component="div" className="error" />
      </Grid>
      <Grid item xs={6}>
        <Field
          name="img"
          as={TextField}
          label="img"
          fullWidth
          variant="outlined"
        />
        <ErrorMessage name="img" component="div" className="error" />
      </Grid>
    </Grid>

    <Button variant="contained" color="primary" type="submit">
      Update
    </Button>
  </Form>
    </Formik>
  );
}
