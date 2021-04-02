import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    paddingTop: 0,
    paddingBottom: 45,
    paddingHorizontal: 0,
  },
  centerSection: {
    textAlign: "center",
  },
  leftSection: {
    textAlign: "left",
  },
  title: {
    english: {
      fontSize: 16,
    },
    spanish: {
      fontSize: 14,
    },
    date: {
      fontSize: 11,
      fontWeight: "bold",
      width: "200px",
    },
  },
  rightSection: {
    textAlign: "right",
    marginRight: 50,
  },
  rowSection: {
    flexDirection: "row",
    marginRight: 80,
  },
  image: {
    width: "100%",
  },
});

// Create Document Component
const MyDocument = ({
  date,
  pacient,
  folio,
  age,
  birth_date,
  gender,
  test_result,
  observations,
  id_64,
  test_64,
  qr_64,
}) => {
  console.log("QR_64", qr_64);
  return (
    <>
      {date !== undefined ? (
        <Document>
          <Page size="A4" wrap style={styles.page}>
            <View style={styles.image}>
              <Image source="https://raw.githubusercontent.com/rafalagunas/vaccun/main/src/Components/Document/banner.png" />
            </View>

            <View style={{ marginBottom: "20px", textAlign: "center" }}>
              <Text style={{ fontSize: "15" }}>Medical certificate</Text>
              <Text style={{ fontSize: "14" }}>Certificado Médico</Text>
            </View>

            <View
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "0 60px",
              }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "15px",
                }}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    width: "50%",
                  }}>
                  <View>
                    <Text style={{ fontSize: "11" }}>Test Date:</Text>
                    <Text style={{ fontSize: "10" }}>Fecha de prueba:</Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: "11",
                        fontWeight: "700",
                        textDecoration: "underline",
                        paddingLeft: "20px",
                      }}>
                      {date}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    width: "50%",
                  }}>
                  <View>
                    <Text style={{ fontSize: "11" }}>Folio Number:</Text>
                    <Text style={{ fontSize: "10" }}>Número de Folio:</Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: "12",
                        fontWeight: "700",
                        textDecoration: "underline",
                        paddingLeft: "20px",
                      }}>
                      {folio}
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "15px",
                }}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    width: "50%",
                  }}>
                  <View>
                    <Text style={{ fontSize: "11" }}>Name:</Text>
                    <Text style={{ fontSize: "10" }}>Nombre:</Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: "12",
                        fontWeight: "700",
                        textDecoration: "underline",
                        paddingLeft: "20px",
                      }}>
                      {pacient}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    width: "50%",
                  }}>
                  <View>
                    <Text style={{ fontSize: "11" }}>Date of Birh:</Text>
                    <Text style={{ fontSize: "10" }}>Fecha de Nacimiento:</Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: "12",
                        fontWeight: "700",
                        textDecoration: "underline",
                        paddingLeft: "20px",
                      }}>
                      {birth_date}
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "15px",
                }}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    width: "50%",
                  }}>
                  <View>
                    <Text style={{ fontSize: "11" }}>Age:</Text>
                    <Text style={{ fontSize: "10" }}>Edad:</Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: "12",
                        fontWeight: "700",
                        textDecoration: "underline",
                        paddingLeft: "20px",
                      }}>
                      {age}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    width: "50%",
                  }}>
                  <View>
                    <Text style={{ fontSize: "11" }}>Gender:</Text>
                    <Text style={{ fontSize: "10" }}>Genero:</Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: "12",
                        fontWeight: "700",
                        textDecoration: "underline",
                        paddingLeft: "20px",
                      }}>
                      {gender}
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "15px",
                }}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    width: "50%",
                  }}>
                  <View>
                    <Text style={{ fontSize: "11" }}>
                      I hereby certify that the patient:
                    </Text>
                    <Text
                      style={{
                        fontSize: "12",
                        paddingRight: "20px",
                        textDecoration: "underline",
                      }}>
                      {pacient}
                    </Text>
                    <Text style={{ fontSize: "11", paddingRight: "20px" }}>
                      attended the test COVID 19
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    width: "50%",
                  }}>
                  <View>
                    <Text style={{ fontSize: "11" }}>
                      Por medio del presente certifico que el paciente:
                    </Text>
                    <Text
                      style={{
                        fontSize: "12",
                        paddingRight: "20px",
                        textDecoration: "underline",
                      }}>
                      {pacient}
                    </Text>
                    <Text style={{ fontSize: "11" }}>
                      acudio a realizarse la prueba para detección de COVID 19
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "15px",
                }}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    width: "50%",
                  }}>
                  <View>
                    <Text style={{ fontSize: "11" }}>Name of the Test:</Text>
                    <Text style={{ fontSize: "10", paddingRight: "20px" }}>
                      COVID 19 Detection Antigen. Qualitative.
                      Inmunochromatography. Ag SARS COV 2 Roche * COFEPRIS
                      Authorization: CAS/SESSDM/17969/2020
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    width: "50%",
                  }}>
                  <View>
                    <Text style={{ fontSize: "11" }}>Nombre de la Prueba:</Text>
                    <Text style={{ fontSize: "10" }}>
                      Antígeno de detección COVID 19. Cualitativo
                      Inmunocromatográfica. Reactivo Ag SARS COV 2 Roche *
                      Autorización COFEPRIS: CAS/SESSDM/17969/2020
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "15px",
                }}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    width: "50%",
                  }}>
                  <View>
                    <Text style={{ fontSize: "11" }}>Test Resultant:</Text>
                    <Text style={{ fontSize: "10" }}>Test Resultant:</Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: "14",
                        fontWeight: "700",
                        textDecoration: "underline",
                        paddingLeft: "20px",
                      }}>
                      {test_result}
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "25px",
                }}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    width: "50%",
                  }}>
                  <View>
                    <Text style={{ fontSize: "11" }}>Observations:</Text>
                    <Text style={{ fontSize: "10" }}>Observaciones:</Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: "10",
                        fontWeight: "700",
                        paddingLeft: "20px",
                      }}>
                      {observations}
                    </Text>
                  </View>
                </View>
              </View>
              {/* FIRMA */}
              <View
                style={{
                  marginBottom: "15px",
                }}>
                <View
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "left",
                    marginBottom: "15px",
                  }}>
                  <View>
                    <Text
                      style={{
                        fontSize: "11",
                        fontWeight: "600",
                      }}>
                      Certificate is issued for the purposes that the patient
                      agrees.
                    </Text>
                    <Text
                      style={{
                        fontSize: "11",
                        fontWeight: "600",
                      }}>
                      Se emite certificado para los fines que al paciente
                      convenga.
                    </Text>
                    <Image
                      style={{
                        width: "68px",
                        height: "28px",
                        marginBottom: "10px",
                      }}
                      source="https://raw.githubusercontent.com/rafalagunas/vaccun/main/src/Components/Document/firma.png"
                    />
                    <Text
                      style={{
                        fontSize: "11",
                        fontWeight: "600",
                      }}>
                      Dra. María Teresa Chavez Espinoza
                    </Text>
                    <Text
                      style={{
                        fontSize: "11",
                        fontWeight: "600",
                        marginBottom: "10px",
                      }}>
                      Cedula Profesional 2847019
                    </Text>
                  </View>
                  {/* QR */}
                  <View
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "0 auto",
                    }}>
                    <View
                      style={{
                        width: "100%",
                        margin: "0 auto",
                        display: "flex",
                        justifyContent: "center",
                      }}>
                      <Image
                        source={qr_64}
                        style={{ width: "50px", height: "50px" }}
                      />
                    </View>
                  </View>
                </View>
              </View>

              {/* fin */}
            </View>

            <View
              style={{
                position: "absolute",
                height: 40,
                left: "0",
                right: "0",
                top: "100%",
                padding: "0 10%",
                margin: "0 auto",
                textAlign: "center",
              }}
              fixed>
              <Text style={{ fontWeight: "bold", fontSize: 8 }}>
                Medical Center - LobbyCare Azuna Medical Center, Piso 9,
                Consultorio 923, Av. Sayil esquina con Av. Savignac, SM 06 MZ 5
                LT 2, Cancún, Quintana Roo, CP. 77500 Módulo de atención rápida
                – Puerto Cancún Blvd. Kulkulcán km. 1.5, Puerto Juárez, Zona
                Hotelera, T1500 Cancún, Q.R. Oficina Corporativa Ave Sayil Smz 6
                Mz 5 Lote 2 Piso 11 Interior 1101 A, Plaza Azuna Cancún, Benito
                Juárez, Q.R.
              </Text>
            </View>
          </Page>

          <Page size="A4" wrap style={styles.page}>
            <View style={styles.image}>
              <Image source="https://raw.githubusercontent.com/rafalagunas/vaccun/main/src/Components/Document/banner.png" />
            </View>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "0 30px",
              }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "20px",
                }}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    width: "50%",
                  }}>
                  <View>
                    <Text style={{ fontSize: "12" }}>Test Date:</Text>
                    <Text style={{ fontSize: "11" }}>Fecha de prueba:</Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: "14",
                        fontWeight: "700",
                        textDecoration: "underline",
                        paddingLeft: "20px",
                      }}>
                      {date}
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "20px",
                }}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    width: "50%",
                  }}>
                  <View>
                    <Text style={{ fontSize: "12" }}>Patient ID:</Text>
                    <Text style={{ fontSize: "11" }}>
                      Identificación del paciente:
                    </Text>
                  </View>
                  <View>
                    <Image
                      source={id_64}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                position: "absolute",
                height: 40,
                left: "0",
                right: "0",
                top: "100%",
                padding: "0 10%",
                margin: "0 auto",
                textAlign: "center",
              }}
              fixed>
              <Text style={{ fontWeight: "bold", fontSize: 8 }}>
                Medical Center - LobbyCare Azuna Medical Center, Piso 9,
                Consultorio 923, Av. Sayil esquina con Av. Savignac, SM 06 MZ 5
                LT 2, Cancún, Quintana Roo, CP. 77500 Módulo de atención rápida
                – Puerto Cancún Blvd. Kulkulcán km. 1.5, Puerto Juárez, Zona
                Hotelera, T1500 Cancún, Q.R. Oficina Corporativa Ave Sayil Smz 6
                Mz 5 Lote 2 Piso 11 Interior 1101 A, Plaza Azuna Cancún, Benito
                Juárez, Q.R.
              </Text>
            </View>
          </Page>

          <Page size="A4" wrap style={styles.page}>
            <View style={styles.image}>
              <Image source="https://raw.githubusercontent.com/rafalagunas/vaccun/main/src/Components/Document/banner.png" />
            </View>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "0 30px",
              }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "20px",
                }}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    width: "50%",
                  }}>
                  <View>
                    <Text style={{ fontSize: "12" }}>Test Date:</Text>
                    <Text style={{ fontSize: "11" }}>Fecha de prueba:</Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: "14",
                        fontWeight: "700",
                        textDecoration: "underline",
                        paddingLeft: "20px",
                      }}>
                      {date}
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "20px",
                }}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    width: "50%",
                  }}>
                  <View>
                    <Text style={{ fontSize: "12" }}>Evidence:</Text>
                    <Text style={{ fontSize: "11" }}>Foto de la prueba:</Text>
                  </View>
                  <View>
                    <Image
                      source={test_64}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                position: "absolute",
                height: 40,
                left: "0",
                right: "0",
                top: "100%",
                padding: "0 10%",
                margin: "0 auto",
                textAlign: "center",
              }}
              fixed>
              <Text style={{ fontWeight: "bold", fontSize: 8 }}>
                Medical Center - LobbyCare Azuna Medical Center, Piso 9,
                Consultorio 923, Av. Sayil esquina con Av. Savignac, SM 06 MZ 5
                LT 2, Cancún, Quintana Roo, CP. 77500 Módulo de atención rápida
                – Puerto Cancún Blvd. Kulkulcán km. 1.5, Puerto Juárez, Zona
                Hotelera, T1500 Cancún, Q.R. Oficina Corporativa Ave Sayil Smz 6
                Mz 5 Lote 2 Piso 11 Interior 1101 A, Plaza Azuna Cancún, Benito
                Juárez, Q.R.
              </Text>
            </View>
          </Page>
        </Document>
      ) : (
        <Document>
          <Page size="A4" wrap style={styles.page}>
            <View style={styles.centerSection}>
              <Text style={styles.title.english}>Please refresh the page</Text>
            </View>
          </Page>
        </Document>
      )}
    </>
  );
};

export default MyDocument;
