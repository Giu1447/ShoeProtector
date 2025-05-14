# Step 1: Build the application
FROM maven:3.8.6-openjdk-17-slim AS build

WORKDIR /app
COPY ./user-service/pom.xml ./user-service/pom.xml
RUN mvn -f ./user-service/pom.xml clean package -DskipTests

# Step 2: Run the application
FROM openjdk:17-jdk-slim

WORKDIR /app
COPY --from=build /app/user-service/target/user-service-*.jar ./user-service.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/app/user-service.jar"]
