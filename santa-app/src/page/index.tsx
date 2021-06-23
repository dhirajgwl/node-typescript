import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessageAction, clearState } from '../stores/slices/sendMessage';
import { CircularProgress, Modal, Button, Grid, Typography } from '@material-ui/core';
import TextArea from '../components/textArea';
import TextInput from '../components/textInput';
import Card from '../components/Card';
import './style.scss';
import { RootState } from '../stores/store';
import Panel from '../components/panel';

export type InitialState = {
  userName: string;
  wish: string;
};
const initialState = {
  userName: '',
  wish: '',
};

const Page: React.FC = () => {
  const [{ userName, wish }, setState] = useState<InitialState>(initialState);
  const { message, errorMessage, loading } = useSelector((state: RootState) => state.sendMessageReducer);
  const dispatch = useDispatch();
  const onChangeHandler = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value, name } = evt.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
 

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    dispatch(sendMessageAction({ userName, wish }));
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container justify="center">
          <Card>
            <Typography variant="h6" gutterBottom>
              A letter to Santa
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Ho ho ho, what you want for christma?
            </Typography>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
              <TextInput name="userName" labelText="User Name:" value={userName} onChange={onChangeHandler}></TextInput>
              <TextArea name="wish" labelText="Wish:" value={wish} onChange={onChangeHandler}></TextArea>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                className="align-right"
                disabled={!userName.trim() || !wish.trim()}
              >
                Send Wish
              </Button>
            </form>
          </Card>
          <Panel
            open={!!errorMessage || !!message}
            message={message || errorMessage}
            type={message ? 'success' : 'error'}
            handlePopup={() => {
              setState({ userName: '', wish: '' });
              dispatch(clearState());
            }}
          ></Panel>
          <Modal
            open={loading}
            className="align-center"
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <CircularProgress color="secondary" />
          </Modal>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Page;
