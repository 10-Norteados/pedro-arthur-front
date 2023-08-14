import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import Button from "../../components/button";
import ContentBody from "../../components/layout/content-body";
import Container from "../../components/spaccing/container";
import PagePadding from "../../components/spaccing/page-padding";
import TableGuests from "../../components/table";
import { useEffect } from "react";
import axios from "../../services/index.";

const Home = () => {

  useEffect(() => {
    const sumPlepples = async () => {
      const response = await axios.get(`sumPeoples`)
      // console.log(response)
    }
    sumPlepples()

  }, [])

  return (
    <Box >
      <Container>
        <PagePadding>
          <ContentBody>
            <Text mt="64px" mb="24px" fontSize="20px" fontWeight="bold">Temos um total de <strong style={{ color: "#5D862A" }}>50 </strong>convidados</Text>
            <TableGuests />
            <Box mt="24px" texAlign="center">
              <Button className="primary">Adicionar</Button>
            </Box>
          </ContentBody>
        </PagePadding>
      </Container>
    </Box>
  );
};

export default Home;