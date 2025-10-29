import Order from "../models/Order.js";

// @desc Create new order
export const createOrder = async (req, res) => {
    try {
        const order = new Order(req.body);
        const savedOrder = await order.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc Get all orders
export const getOrders = async (req, res) => {
    try {
        const orders = await Order.find().sort({ createdAt: -1 });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

// @desc Get single order
export const getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) return res.status(404).json({ message: "Order not found" });
        res.json(order);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

// @desc Update order
export const updateOrder = async (req, res) => {
    try {
        const updated = await Order.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.json(updated);
    } catch {
        res.status(400).json({ message: error.message });
    }
};

// @desc Delete order
export const deleteOrder = async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.json({ message: "Order removed" });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};