FROM gitlab.paysera.net/ai_rnd/dependency_proxy/containers/python:3.11.4

# Set the working directory to /app
WORKDIR /app

COPY . /app

# Copy the requirements file into the container
# Adjust the path based on your project's structure and build context
COPY requirements.txt .


# Install the dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code into the container
COPY . .

# Expose the port your app runs on
EXPOSE 8080

# Command to run the application
CMD python ingest.py && exec uvicorn main:app --host 0.0.0.0 --port 8080
