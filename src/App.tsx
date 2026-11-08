
import { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Stack,
  Divider,
} from '@mui/material';

type DashboardCardProps = {
  title: string;
  description: string;
  icon: string;
  status: string;
};

const colors = {
  background: '#0b1220',
  panel: '#152238',
  panelDark: '#101c2e',
  border: '#263a55',
  blue: '#38bdf8',
  lightBlue: '#7dd3fc',
  white: '#f8fafc',
  muted: '#94a3b8',
};

function DashboardCard({
  title,
  description,
  icon,
  status,
}: DashboardCardProps) {
  return (
    <Card
      sx={{
        height: '100%',
        backgroundColor: colors.panel,
        color: colors.white,
        border: `1px solid ${colors.border}`,
        borderRadius: 3,
        transition: 'transform 0.2s, border-color 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          borderColor: colors.blue,
        },
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Typography sx={{ fontSize: 30, mb: 2 }}>
          {icon}
        </Typography>

        <Typography
          variant="h6"
          sx={{ fontWeight: 'bold', mb: 1 }}
        >
          {title}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: colors.muted,
            mb: 3,
            minHeight: 44,
          }}
        >
          {description}
        </Typography>

        <Chip
          label={status}
          size="small"
          sx={{
            color: colors.lightBlue,
            backgroundColor: '#0c344a',
            fontWeight: 600,
          }}
        />
      </CardContent>
    </Card>
  );
}

const sections = [
  {
    title: 'Hardware',
    icon: '🖥️',
    description:
      'Computer components, diagnostics, maintenance, and troubleshooting.',
    status: 'Learning & Practicing',
  },
  {
    title: 'Networking',
    icon: '🌐',
    description:
      'IP addressing, network devices, connectivity, and fundamentals.',
    status: 'Learning',
  },
  {
    title: 'Storage',
    icon: '💾',
    description:
      'Exploring storage devices, file systems, backups, and data management.',
    status: 'Planned',
  },
  {
    title: 'Virtual Machines',
    icon: '🖧',
    description:
      'Building virtual environments to practice operating systems and networking.',
    status: 'Planned',
  },
  {
    title: 'Projects',
    icon: '🛠️',
    description:
      'Documenting hands-on experiments, technical challenges, and solutions.',
    status: 'In Progress',
  },
];

const stats = [
  { label: 'Portfolio', value: 'Active' },
  { label: 'Home Lab', value: 'Planning' },
  { label: 'Networking', value: 'Learning' },
  { label: 'Current Focus', value: 'Hands-On IT' },
];

const goals = [
  { name: 'CompTIA A+ Fundamentals', status: 'Studying' },
  { name: 'Build a Personal Home Lab', status: 'Planned' },
  {
    name: 'Practice Networking & Virtualization',
    status: 'Planned',
  },
  {
    name: 'Document and Publish Technical Projects',
    status: 'In Progress',
  },
];

function App() {
  const [activeSection, setActiveSection] =
    useState('Overview');

  const navigation = [
    'Overview',
    'Skills',
    'Projects',
    'Roadmap',
  ];

  function navigateTo(section: string) {
    setActiveSection(section);

    const element = document.getElementById(
      section.toLowerCase()
    );

    element?.scrollIntoView({
      behavior: 'smooth',
    });
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: colors.background,
        color: colors.white,
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* NAVIGATION */}
      <Box
        sx={{
          backgroundColor: colors.panelDark,
          borderBottom: `1px solid ${colors.border}`,
          py: 2,
        }}
      >
        <Container maxWidth="lg">
          <Stack
            spacing={2}
            sx={{
              flexDirection: {
                xs: 'column',
                md: 'row',
              },
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: colors.blue,
                fontWeight: 800,
              }}
            >
              ◈ THOMPSON / NETLAB
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              sx={{
                flexWrap: 'wrap',
                justifyContent: 'center',
              }}
            >
              {navigation.map((item) => (
                <Button
                  key={item}
                  onClick={() => navigateTo(item)}
                  sx={{
                    color:
                      activeSection === item
                        ? colors.blue
                        : '#cbd5e1',
                    textTransform: 'none',
                  }}
                >
                  {item}
                </Button>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* WELCOME */}
        <Box id="overview" sx={{ mb: 7 }}>
          <Chip
            label="IT & NETWORKING PORTFOLIO"
            sx={{
              backgroundColor: '#0c344a',
              color: colors.lightBlue,
              mb: 3,
            }}
          />

          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: {
                xs: '2.6rem',
                md: '4rem',
              },
              mb: 2,
            }}
          >
            Antonio Thompson
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: colors.blue,
              mb: 3,
            }}
          >
            Aspiring IT & Networking Professional
          </Typography>

          <Typography
            sx={{
              color: '#cbd5e1',
              maxWidth: 700,
              lineHeight: 1.8,
              mb: 4,
            }}
          >
            Welcome to my technical portfolio. I'm
            developing hands-on experience in computer
            hardware, networking, troubleshooting, and
            home lab technologies. This website documents
            what I'm learning, building, and improving.
          </Typography>

          <Stack
            spacing={2}
            sx={{
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              alignItems: {
                xs: 'stretch',
                sm: 'center',
              },
            }}
          >
            <Button
              variant="contained"
              onClick={() => navigateTo('Projects')}
              sx={{
                backgroundColor: '#0284c7',
                px: 3,
                py: 1.5,
                fontWeight: 'bold',
              }}
            >
              View My Projects
            </Button>

            <Button
              variant="outlined"
              href="https://github.com/Athompson03"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                borderColor: colors.blue,
                color: colors.blue,
                px: 3,
                py: 1.5,
              }}
            >
              Visit My GitHub
            </Button>
          </Stack>
        </Box>

        {/* DASHBOARD STATUS */}
        <Box sx={{ mb: 7 }}>
          <Typography
            variant="overline"
            sx={{
              color: colors.blue,
              letterSpacing: 2,
            }}
          >
            SYSTEM OVERVIEW
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              mb: 3,
            }}
          >
            My Learning Dashboard
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(4, 1fr)',
              },
              gap: 2,
            }}
          >
            {stats.map((stat) => (
              <Box
                key={stat.label}
                sx={{
                  p: 3,
                  backgroundColor: colors.panelDark,
                  border: `1px solid ${colors.border}`,
                  borderRadius: 3,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ color: colors.muted }}
                >
                  {stat.label}
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    color: colors.lightBlue,
                    mt: 1,
                    fontWeight: 'bold',
                  }}
                >
                  {stat.value}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* TECHNICAL AREAS */}
        <Box id="skills" sx={{ mb: 7 }}>
          <Typography
            variant="overline"
            sx={{
              color: colors.blue,
              letterSpacing: 2,
            }}
          >
            TECHNICAL AREAS
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              mb: 3,
            }}
          >
            Explore My Home Lab
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
              },
              gap: 3,
            }}
          >
            {sections.map((section) => (
              <DashboardCard
                key={section.title}
                {...section}
              />
            ))}
          </Box>
        </Box>

        {/* FEATURED PROJECTS */}
        <Box id="projects" sx={{ mb: 7 }}>
          <Typography
            variant="overline"
            sx={{
              color: colors.blue,
              letterSpacing: 2,
            }}
          >
            PROJECT LOG
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              mb: 3,
            }}
          >
            Featured Projects
          </Typography>

          <Card
            sx={{
              backgroundColor: colors.panel,
              color: colors.white,
              border: `1px solid ${colors.border}`,
              borderRadius: 3,
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Stack
                spacing={2}
                sx={{
                  flexDirection: {
                    xs: 'column',
                    sm: 'row',
                  },
                  justifyContent: 'space-between',
                  alignItems: {
                    xs: 'flex-start',
                    sm: 'center',
                  },
                }}
              >
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 'bold' }}
                  >
                    Personal Portfolio Website
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: colors.muted,
                      mt: 1,
                    }}
                  >
                    A React and TypeScript website
                    built using Material UI, Vite,
                    and GitHub version control.
                  </Typography>
                </Box>

                <Chip
                  label="In Progress"
                  sx={{
                    backgroundColor: '#0c344a',
                    color: colors.lightBlue,
                  }}
                />
              </Stack>
            </CardContent>
          </Card>

          <Typography
            variant="body2"
            sx={{
              color: colors.muted,
              mt: 2,
            }}
          >
            More projects will be added as I complete
            and document my hands-on labs.
          </Typography>
        </Box>

        {/* LEARNING ROADMAP */}
        <Box id="roadmap" sx={{ mb: 6 }}>
          <Typography
            variant="overline"
            sx={{
              color: colors.blue,
              letterSpacing: 2,
            }}
          >
            DEVELOPMENT PATH
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              mb: 3,
            }}
          >
            My Learning Roadmap
          </Typography>

          <Stack spacing={2}>
            {goals.map((goal) => (
              <Box
                key={goal.name}
                sx={{
                  p: 2.5,
                  backgroundColor: colors.panelDark,
                  border: `1px solid ${colors.border}`,
                  borderRadius: 2,
                }}
              >
                <Stack
                  spacing={2}
                  sx={{
                    flexDirection: {
                      xs: 'column',
                      sm: 'row',
                    },
                    justifyContent: 'space-between',
                    alignItems: {
                      xs: 'flex-start',
                      sm: 'center',
                    },
                  }}
                >
                  <Typography
                    sx={{ fontWeight: 500 }}
                  >
                    {goal.name}
                  </Typography>

                  <Chip
                    label={goal.status}
                    size="small"
                    sx={{
                      backgroundColor: '#203449',
                      color: colors.lightBlue,
                    }}
                  />
                </Stack>
              </Box>
            ))}
          </Stack>
        </Box>

        {/* FOOTER */}
        <Divider
          sx={{
            borderColor: colors.border,
            mb: 3,
          }}
        />

        <Typography
          variant="body2"
          sx={{
            textAlign: 'center',
            color: colors.muted,
          }}
        >
          © {new Date().getFullYear()} Antonio Thompson
          {' | '}IT & Networking Portfolio
        </Typography>
      </Container>
    </Box>
  );
}

export default App;
