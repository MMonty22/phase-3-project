class CreateBets < ActiveRecord::Migration[6.1]
  def change
    create_table :bets do |t|
      t.string :description
      t.string :odds
      t.string :league
      t.string :bet_type
      t.string :result
      t.float :units_change
      t.string :segment
      t.integer :person_id
      t.timestamps
    end
  end
end
