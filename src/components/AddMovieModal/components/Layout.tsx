import { Box, styled } from '@mui/material';

const Container = styled(Box)({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: '48px',
  paddingTop: '72px',
  boxSizing: 'border-box',
});

const Header = styled(Box)({
  width: '100%',
  minHeight: '24px',
  display: 'flex',
  alignItems: 'flex-start',
  position: 'relative',
  marginBottom: '16px',
});

const Content = styled(Box)({
  width: '100%',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  marginBottom: '48px',
});

const Footer = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '24px',
  marginTop: 'auto',
});

interface ModalLayoutProps {
  header: React.ReactNode;
  content: React.ReactNode;
  footer?: React.ReactNode;
}

export function ModalLayout({ header, content, footer }: ModalLayoutProps) {
  return (
    <Container>
      <Header>{header}</Header>
      <Content>{content}</Content>
      {footer && <Footer>{footer}</Footer>}
    </Container>
  );
} 