export default function handler(req, res) {
    const { slug } = req.query
    res.end(`slug: ${slug}`)
}