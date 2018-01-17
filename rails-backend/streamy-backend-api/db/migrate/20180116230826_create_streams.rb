class CreateStreams < ActiveRecord::Migration[5.1]
  def change
    create_table :streams do |t|
      t.string "title"
      t.string "user"
      t.string "stream_url"
      t.string "description"
      t.string "time"
      t.timestamps
    end
  end
end
