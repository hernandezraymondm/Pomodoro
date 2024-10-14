import { Text, Box, Stack, rem } from '@mantine/core';
import { IconSun, IconPhone, IconMapPin, IconAt } from '@tabler/icons-react';
import Styles from './icons.module.css';

interface ContactIconProps
  extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: typeof IconSun;
  title: React.ReactNode;
  description: React.ReactNode;
}

const ContactIcon: React.FC<ContactIconProps> = ({
  icon: Icon,
  title,
  description,
  ...others
}) => {
  return (
    <div className={Styles.wrapper} {...others}>
      <Box mr="md">
        <Icon style={{ width: rem(24), height: rem(24) }} />
      </Box>

      <div>
        <Text size="xs" className={Styles.title}>
          {title}
        </Text>
        <Text className={Styles.description}>{description}</Text>
      </div>
    </div>
  );
};

const MOCKDATA = [
  {
    title: 'Email',
    description: 'rayhernandez.dev@gmail.com',
    icon: IconAt,
  },
  { title: 'Phone', description: '09155293987', icon: IconPhone },
  { title: 'Address', description: 'Cavite, Philippines', icon: IconMapPin },
  { title: 'Working hours', description: '8 a.m. – 11 p.m.', icon: IconSun },
];

const ContactIconsList: React.FC = () => {
  const items = MOCKDATA.map((item, index) => (
    <ContactIcon key={index} {...item} />
  ));
  return <Stack>{items}</Stack>;
};

export { ContactIconsList };
