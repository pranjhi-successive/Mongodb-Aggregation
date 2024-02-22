import express from "express";
import request from "supertest";
import Server from "../server";
import { serverConfig } from "../config";

describe("API Integration Tests", () => {
  let server: Server;
  let app: express.Application;

  beforeAll(async () => {
    server = new Server(serverConfig);
    app = server.getApp();
    await server.connectDB();
  });
  afterEach(async () => {
    await server.connectDB();
  });
 
  test("GET /aggregate/error", async () => {
    const response = await request(app).get(
      "/aggregate/error?structural_error=true",
    );

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      success: true,
      data: expect.objectContaining({}),
    });
  });
  test("GET /aggregate/error", async () => {
    const response = await request(app)
      .get("/aggregate/error")
      .set("groupBy", '{"_id":null,"total_error":{"$sum":1}}');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      success: true,
      data: expect.objectContaining({}),
    });
  });
  test("GET /aggregate/error", async () => {
    const response = await request(app)
      .get("/aggregate/error")
      .set(
        "projection",
        '{"averageErrorsPerDocument":{"$divide":["$totalErrors","$totalDocuments"]}}',
      );

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      success: true,
      data: expect.objectContaining({}),
    });
  });
  test("GET /aggregate/error", async () => {
    const response = await request(app)
      .get("/aggregate/error?structural_error=true")
      .set("groupBy", '{"_id":null,"total_error":{"$sum":1}}');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      success: true,
      data: expect.objectContaining({}),
    });
  });
  test("GET /aggregate/error", async () => {
    const response = await request(app)
      .get("/aggregate/error")
      .set(
        "groupBy",
        '{"_id":null,"totalDocuments":{"$sum":1},"totalErrors":{"$sum":{"$cond":[{"$or":["$structural_error","$field_error","$reg_exp_error","$list_rule_error","$min_length_error","$max_length_error","$dependent_field_error"]},1,0]}}}',
      )
      .set(
        "projection",
        '{"averageErrorsPerDocument":{"$divide":["$totalErrors","$totalDocuments"]}}',
      );

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      success: true,
      data: expect.objectContaining({}),
    });
  });
  test("GET /aggregate/error", async () => {
    const response = await request(app)
      .get("/aggregate/error")
      .set("groupBy", '{"_id":null,"total_error":"$sum":1}}');

    expect(response.status).toBe(500);
    expect(response.body).toEqual({
        success: false,
        error: expect.stringContaining(""),
    });
  });
  test("GET /aggregate/stat", async () => {
    const response = await request(app).get(
      '/aggregate/stat?client_code="A_WGS"',
    );

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      success: true,
      data: expect.objectContaining({}),
    });
  });
  test("GET /aggregate/stat", async () => {
    const response = await request(app).get('/aggregate/stat?client_code="A_WGS"').set('groupBy','{"_id":null,"totalDocuments":{"$sum":1}}');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      success: true,
      data: expect.objectContaining({}),
    });
  });
  test("GET /aggregate/stat", async () => {
    const response = await request(app).get("/aggregate/stat").set('groupBy','{"_id":null,"totalDocuments":{"$sum":1}}');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      success: true,
      data: expect.objectContaining({}),
    });
  });
  test("GET /aggregate/stat", async () => {
    const response = await request(app).get("/aggregate/stat").set('groupBy','{"_id":null,"totalDocuments":"$sum":1}}');

    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      success: false,
      error: expect.stringContaining(""),
    });
  });
});
