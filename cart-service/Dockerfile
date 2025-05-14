# Basis-Image mit Java 17
FROM openjdk:17-jdk-slim

# Arbeitsverzeichnis im Container
WORKDIR /app

# Maven Wrapper + Projektdateien kopieren
COPY . .

# Build mit Maven Wrapper (ohne Tests)
RUN ./mvnw clean package -DskipTests

# Port 8080 freigeben
EXPOSE 8080

# App starten
CMD ["java", "-jar", "target/cart-service-0.0.1-SNAPSHOT.jar"]
