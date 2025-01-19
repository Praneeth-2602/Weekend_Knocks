import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface VerificationEmailProps {
  firstName: string;
  verificationUrl: string;
}

export const VerificationEmail = ({
  firstName = 'Gamer',
  verificationUrl,
}: VerificationEmailProps) => {
  const main = {
    backgroundColor: '#1a1a1a',
    fontFamily: 'Arial, sans-serif',
  };

  const container = {
    backgroundColor: '#222222',
    borderRadius: '10px',
    margin: '0 auto',
    padding: '40px 20px',
  };

  const heading = {
    color: '#ff4500',
    fontSize: '24px',
    textAlign: 'center' as const,
    marginBottom: '30px',
    fontWeight: 'bold',
    textTransform: 'uppercase' as const,
    letterSpacing: '2px',
  };

  const text = {
    color: '#ffffff',
    fontSize: '16px',
    lineHeight: '1.6',
    margin: '0 0 30px',
  };

  const button = {
    backgroundColor: '#ff4500',
    borderRadius: '5px',
    color: '#ffffff',
    display: 'inline-block',
    fontWeight: 'bold',
    letterSpacing: '1px',
    padding: '15px 30px',
    textDecoration: 'none',
    textTransform: 'uppercase' as const,
  };

  const footer = {
    color: '#898989',
    fontSize: '14px',
    textAlign: 'center' as const,
    margin: '30px 0 0',
  };

  return (
    <Html>
      <Head />
      <Preview>Verify your Weekend Knocks account</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={heading}>
            🎮 Level Up Your Weekend Knocks Experience!
          </Text>
          
          <Section style={text}>
            <Text>Hey {firstName},</Text>
            <Text>Welcome to the Weekend Knocks gaming community! You're just one click away from unlocking epic gaming experiences.</Text>
            <Text>Press START to join the elite squad!</Text>
          </Section>

          <Section style={{ textAlign: 'center', margin: '20px 0' }}>
            <Button style={button} href={verificationUrl}>
              PRESS START TO VERIFY
            </Button>
          </Section>

          <Text style={text}>
            This verification link will expire in 24 hours. If you didn't create a Weekend Knocks account, you can safely ignore this email.
          </Text>

          <Section style={footer}>
            <Text>Game on!</Text>
            <Text>The Weekend Knocks Team</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default VerificationEmail;