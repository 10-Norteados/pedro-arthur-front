import { Box, Text } from "@chakra-ui/react";
import Container from "../spaccing/container";
import PagePadding from "../spaccing/page-padding";
import ContentBody from "../layout/content-body";
import iconDown from "../../assets/icon/down.png"

const PDF = () => {
  return (
    <>
      <Box>
        <Container>
          <PagePadding>
            <ContentBody>
              <Box
                mt="24px"
                borderBottom="1px solid #000"
                borderTop="1px solid #000"
                style={{ borderStyle: "dashed" }}
                py="16px"
              >
                <Text
                  textAlign="center"
                  fontSize="19px"
                  fontWeight="semibold"
                  style={{ fontFamily: "Gluten, cursive" }}
                >
                  Olá{" "}
                  <strong style={{ fontWeight: "black", fontSize: "24px" }}>
                    {guest.name}
                  </strong>
                  , estamos te convidando para comemorar esse dia especial
                  conosco, contamos com sua presença.
                </Text>
                <Text
                  mt="8px"
                  textAlign="center"
                  fontSize="20px"
                  fontWeight="bold"
                >
                  <div style={{ fontFamily: "Gluten, cursive" }}>
                    <strong style={{ color: "#5D862A", fontSize: "38px" }}>
                      24/09
                    </strong>{" "}
                    às{" "}
                    <strong style={{ color: "#5D862A", fontSize: "38px" }}>
                      15:00h
                    </strong>
                  </div>
                </Text>
                <Text
                  mt="8px"
                  textAlign="center"
                  fontSize="20px"
                  fontWeight="semibold"
                  style={{ fontFamily: "Gluten, cursive" }}
                >
                  SÍTIO NOVO HORIZONTE (NA SAÍDA PARA PIRPIRITUBA, EM FRENTE AO
                  GRUPO CENTRY)
                </Text>
              </Box>

              <Text
                mt="8px"
                textAlign="center"
                fontSize="20px"
                fontWeight="bold"
              >
                <strong
                  style={{
                    color: "#D88000",
                    fontSize: "26px",
                    fontFamily: "Gluten, cursive",
                  }}
                >
                  Sugestão de presente:
                </strong>{" "}
              </Text>
              <Text
                mt="8px"
                textAlign="center"
                fontSize="20px"
                fontWeight="bold"
                p="8px 16px"
                borderRadius="9999px"
                bg="#f1f2f3"
              >
                <strong
                  style={{
                    color: "#5D862A",
                    fontSize: "38px",
                    fontFamily: "Gluten, cursive",
                  }}
                >
                  Pacote de fraldas {guest.suggestion}
                </strong>{" "}
              </Text>

              <Text
                mt="24px"
                mb="40px"
                textAlign="center"
                fontSize="24px"
                fontWeight="bold"
              >
                <div style={{ fontFamily: "Gluten, cursive" }}>
                  CLICK NO LINK{" "}
                </div>
                <div
                  style={{
                    fontFamily: "Gluten, cursive",
                    display: "flex",
                    gap: "12px",
                  }}
                >
                  ABAIXO
                  <img src={iconDown} />
                </div>
              </Text>
            </ContentBody>
          </PagePadding>
        </Container>
      </Box>
    </>
  );
};

export default PDF;
