function EventFeedback() {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title mb-3">Event Feedback</h3>

          <form>
            <div className="mb-3">
              <label className="form-label">Your Feedback</label>
              <textarea className="form-control" rows="4"></textarea>
            </div>

            <button className="btn btn-success">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EventFeedback;