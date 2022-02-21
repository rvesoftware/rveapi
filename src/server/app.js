import express from "express";
import morgan from "morgan";
import cors from "cors";
import adminRouter from "../routes/adminRouter.js";
import notesRouter from "../routes/notesRouter.js";
import hardwarePostRouter from "../routes/hardwarePostRouter.js";
import rp from "request-promise";

const app = express();

// settings
app.set("port", process.env.PORT || 4200);

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Server is ready");
});


let options = {
  method: "POST",
  uri: "https://sandbox.wompi.co/v1/transactions",
  qs: {
    "acceptance_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoieXVuc2RlIn0.a7DWU2PDKGp-gy65SbdKL6KHkNim6mqUP-ofxLeJUf4",
    "amount_in_cents": 3000000,
    "currency": "COP",
    "customer_email": "example@wompi.co",
    "payment_method": {
      "type": "BANCOLOMBIA_TRANSFER",
      "token": "tok_prod_280_32326B334c47Ec49a516bf1785247ba2",
      "user_type": "PERSON", // Tipo de persona
      "payment_description": "Pago a Tienda Wompi", // Nombre de lo que se está pagando. Máximo 64 caracteres
      // El siguiente dato SOLO aplica si estás haciendo transacciones en Sandbox:
      "sandbox_status": "APPROVED", // Status final deseado en el Sandbox. Uno de los siguientes: APPROVED, DECLINED o ERROR
    },
    "payment_source_id": 1234,
    "redirect_url": "https://mitienda.com.co/pago/resultado",
    "reference": "TUPtdnVugyU40XlkhixhhGE6uYV2gh89",
    "customer_data": {
      "phone_number": "573307654321",
      "full_name": "Juan Alfonso Pérez Rodríguez"
    },
    "shipping_address": {
      "address_line_1": "Calle 34 # 56 - 78",
      "address_line_2": "Apartamento 502, Torre I",
      "country": "CO",
      "region": "Cundinamarca",
      "city": "Bogotá",
      "name": "Pepe Perez",
      "phone_number": "573109999999",
      "postal_code": "111111"
    }
  },
//   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoieXVuc2RlIn0.a7DWU2PDKGp-gy65SbdKL6KHkNim6mqUP-ofxLeJUf4
  headers: {
      access_token: "pub_prod_rxioPTJAxHjcXVi5KvbCvKAfZYLTnbeH"
  },
  json: true,
  gzip: true
};

app.use("/api/v1/banc", async() => {
    console.log("ENTRO")
    const data = await rp(options)
    
})

// Routes

app.use("/api/v1/admins", adminRouter);
app.use("/api/v1/note", notesRouter);
app.use("/api/v1/hardwarePosts", hardwarePostRouter);



export default app;
