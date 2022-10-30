export default function handler(req, res) {
    console.log(res)
    res.status(500).json({name: 'monkey999'});
}