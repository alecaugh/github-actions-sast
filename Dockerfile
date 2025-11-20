FROM python:3

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements file from the build context (your repo) 
# into the current working directory in the container.
COPY requirements.txt .

# Install dependencies. This creates a layer that Grype can inspect.
# We are installing 'requests' at a specific version just to give Grype some content.
RUN pip install --no-cache-dir -r requirements.txt

# Simple placeholder command to keep the container running
CMD ["python", "-c", "print('Image built successfully and ready for scanning.')"]