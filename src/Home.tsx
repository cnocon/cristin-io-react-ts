import React from "react";
import { Page } from "./Page";
import { Quote } from "./theme/components/Quote";
import { Section } from "./theme/components/Section";
import { Card } from "./theme/components/Card";
import { Link, Box, Text, Heading, Center, SimpleGrid } from "@chakra-ui/react";
import { FaConciergeBell } from "react-icons/fa";

export const Home: React.FC = () => {
  return (
    <Page>
      <Heading size="4xl" my={8}>
        <Center w="100%">
          <Text fontWeight="600" display="block">
            Hi.&nbsp;
          </Text>

          <Text fontWeight="300" display="block">
            How can I help you?
          </Text>
        </Center>
      </Heading>
      <Section icon={FaConciergeBell} title="Services">
        <SimpleGrid columns={3}>
          <Card
            title="Web Development"
            content={[
              "This is my primary area of expertise after 10+ years in the field.",
            ]}
            footer={
              <Text>
                <Link href="mailto:her@cristin.io?subject='Web Development Inquiry'">
                  Contact me about web development.
                </Link>
              </Text>
            }
          />
          <Card
            title="Code Tutoring"
            content={[
              "I work with all ages and focus on teaching with compassion.",
            ]}
            footer={
              <Text>
                <Link href="mailto:her@cristin.io?subject='Code Tutoring Inquiry'">
                  Contact me about tutoring.
                </Link>
              </Text>
            }
          />
          <Card
            title="Career Mentor"
            content={[
              "Leveraging my 15 years of experience, I can offer advice, skill development roadmaps, interview prep, and more.",
            ]}
            footer={
              <Text>
                <Link href="mailto:her@cristin.io?subject='Mentoring Inquiry'">
                  Contact me about mentoring.
                </Link>
              </Text>
            }
          />
        </SimpleGrid>
      </Section>
      <Section>
        <Center>
          <Box maxW="4xl" pt={4}>
            <Quote author="Mariah W." authorDetails="Freelance Developer">
              Cristin O'Connor is a lifesaver! Being new to Gatsby.js, I was
              having a difficult time finding a solution for a blocker. I
              scoured documentation, tried every combination of keywords, and
              and went to every forum I could think of to find the solution. I
              came across Cristin's website and reached out. Cristin was
              responsive, knowledgeable, kind and concise which was exactly what
              a newbie like me needed.
            </Quote>
          </Box>
        </Center>
      </Section>
    </Page>
  );
};
