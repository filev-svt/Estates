﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using api.Data;

#nullable disable

namespace api.Data.Migrations
{
    [DbContext(typeof(StoreContext))]
    [Migration("20231001141402_AddHouseCountryCode")]
    partial class AddHouseCountryCode
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.11");

            modelBuilder.Entity("api.Entities.House", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateOnly>("AvailableFrom")
                        .HasColumnType("TEXT");

                    b.Property<int>("BathroomsCount")
                        .HasColumnType("INTEGER");

                    b.Property<string>("City")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("CountryCode")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("TEXT");

                    b.Property<long>("Currency")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<byte>("EpcRating")
                        .HasColumnType("INTEGER");

                    b.Property<int>("FloorsCount")
                        .HasColumnType("INTEGER");

                    b.Property<int>("Footage")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("HasBasement")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("HasGarage")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("HasParking")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("HasPool")
                        .HasColumnType("INTEGER");

                    b.Property<long>("InitialPrice")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("IsDetached")
                        .HasColumnType("INTEGER");

                    b.Property<int>("LandFootage")
                        .HasColumnType("INTEGER");

                    b.Property<double?>("Latitude")
                        .HasColumnType("REAL");

                    b.Property<double?>("Longitude")
                        .HasColumnType("REAL");

                    b.Property<long>("Price")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime?>("ReservedAt")
                        .HasColumnType("TEXT");

                    b.Property<int>("RoomsCount")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime?>("SoldAt")
                        .HasColumnType("TEXT");

                    b.Property<string>("Street")
                        .HasColumnType("TEXT");

                    b.Property<int?>("StreetNumber")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("Houses");
                });
#pragma warning restore 612, 618
        }
    }
}
