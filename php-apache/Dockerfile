FROM php:7.4-apache

# Enable Apache mod_rewrite
RUN a2enmod rewrite

# Install MySQLi extension
RUN docker-php-ext-install mysqli

# Copy PHP configuration
COPY src/ /var/www/html/
