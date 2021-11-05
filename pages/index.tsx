import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import React, { useState } from 'react';
import classNames from 'classnames';
import { Button } from '../components/Button';
import { Heading } from '../components/Heading';
import { Divider } from '../components/Divider';
import Form from '../components/Form/Form';

const Icon = ({ icon }: { icon: React.ReactNode }) => <span className="text-lg mr-2">{icon}</span>;

const Home: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <div className="m-8">
        <Heading>Login</Heading>

        <Form>
          <Form.Field>
            <Form.Label>Email</Form.Label>
            <Form.Input type="email" value={email} onChange={handleChangeEmail} />
          </Form.Field>

          <Form.Field>
            <Form.Label>Password</Form.Label>
            <Form.Input type="password" value={password} onChange={handleChangePassword} />
          </Form.Field>

          <Button variant={Button.variant.DARK} type="submit">
            Log in
          </Button>

          <Divider>Log in with social</Divider>

          <Button variant={Button.variant.FACEBOOK}>
            <Icon icon={<BsFacebook />} />
            Continue with Facebook
          </Button>

          <Button variant={Button.variant.GOOGLE}>
            <Icon icon={<FcGoogle />} />
            Continue with Google
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Home;
