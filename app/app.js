import express, { json } from "express";
import morgan from "morgan";
//Routes
import clientRoutes from "./routes/clients.route.js";
import DetailsRoutes from "./routes/invoice_details.route.js";
import InvoicesRoutes from "./routes/invoices.route.js";
import ProductsRoutes from "./routes/product.route.js";
import InvoiceRoutes from "./routes/invoice.route.js";

const app=express();


//settings
app.set("port",process.env.PORT || 5005);

//middlewares

app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/api/clients",clientRoutes);
app.use("/api/details",DetailsRoutes);
app.use("/api/invoice",InvoicesRoutes);
app.use("/api/products",ProductsRoutes);
app.use("/api/invoice_one",InvoiceRoutes);

export default app;