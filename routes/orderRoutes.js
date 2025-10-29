import express from "express";
import {
    createOrder,
    getOrders,
    getOrderById,
    updateOrder,
    deleteOrder
} from "../controllers/orderController.js";

const router = express.Router();

router.route("/").get(getOrders).post(createOrder);
router.route("/:id").get(getOrderById).put(updateOrder).delete(deleteOrder);

export default router;