import React from 'react';
import { PageLayout, GeneralLayout } from '../../components/Layout';
import Content from '../../components/Content';
import styles from './register.scss';

const Register = () => {
  return (
    <GeneralLayout>
      <Content>
        <PageLayout title="Register" subtitle="Get your account now.">
          <div class={styles['form']}>
            <input class="input" type="text" placeholder="Please enter your name..."/>
            <input class="input" type="text" placeholder="Please enter your phone number..."/>
            <input class="input" type="text" placeholder="Please enter your email..."/>
            <input class="input" type="text" placeholder="Please enter line id..."/>
            <a class={styles['submit']}>Register</a>
          </div>
        </PageLayout>
      </Content>
    </GeneralLayout>
  );
};

export default Register;