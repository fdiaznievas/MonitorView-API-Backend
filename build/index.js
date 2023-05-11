"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //ESModules
// const express = require('expres') → Commonjs
const novedadesRoutes_1 = __importDefault(require("./routes/novedadesRoutes"));
const endpointRoutes_1 = __importDefault(require("./routes/endpointRoutes"));
const contactosRoutes_1 = __importDefault(require("./routes/contactosRoutes"));
const usersRoutes_1 = __importDefault(require("./routes/usersRoutes"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const app = (0, express_1.default)();
const PORT = 3005;
const router = express_1.default.Router();
app.use(express_1.default.json()); //middleware que transforma la req.body a un json
app.use('/api/v1', router); //middleware (???)
// ***************** ENDPOINTS ***************** //
router.get('/', indexRoutes_1.default);
router.use('/novedades', novedadesRoutes_1.default);
router.use('/endpoint', endpointRoutes_1.default);
router.use('/contactos', contactosRoutes_1.default);
//parametros Query
router.use('/users', usersRoutes_1.default);
// ***************** /ENDPOINTS ***************** //
app.listen(PORT, () => {
    console.log("Mi port " + PORT);
});
console.log("Hola wey");
